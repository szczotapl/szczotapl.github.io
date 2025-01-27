{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  name = "webdev-env";

  buildInputs = with pkgs; [
    nodejs
    yarn
    git
    jq
  ];

  shellHook = ''
    echo "Node.js version: $(node --version)"
    echo "NPM version: $(npm --version)"
    echo "Yarn version: $(yarn --version)"
  '';
}
