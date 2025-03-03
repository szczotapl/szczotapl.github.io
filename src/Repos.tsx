import { useEffect, useState } from "react";
import { Container, Card, Row, Col, Spinner, Button, Alert } from "react-bootstrap";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
}

export default function Repositories() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [loading, setLoading] = useState(true);
  const GITHUB_USERNAME = "tosterlolz";

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
      .then((response) => {
        if (!response.ok) throw new Error("GitHub API error");
        return response.json();
      })
      .then((data) => {
        if (!Array.isArray(data)) throw new Error("Invalid response format");
        setRepos(data);
      })
      .catch((error) => {
        console.error("Error getting repos:", error);
        setRepos(null);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">My GitHub Repositories</h2>
      {loading ? (
        <div className="text-center">
          <Spinner animation="border" variant="light" />
        </div>
      ) : repos === null ? (
        <Alert variant="danger" className="text-center">
          Unable to fetch repositories. <br />
          <Button variant="link" href={`https://github.com/${GITHUB_USERNAME}`} target="_blank">
            Visit my GitHub
          </Button>
        </Alert>
      ) : (
        <Row>
          {repos.map((repo) => (
            <Col key={repo.id} md={4} className="mb-4">
              <Card className="bg-secondary text-white">
                <Card.Body>
                  <Card.Title>{repo.name || "Unnamed Repository"}</Card.Title>
                  <Card.Text>{repo.description || "No description available"}</Card.Text>
                  <Button variant="light" href={repo.html_url} target="_blank">
                    View on GitHub
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}
