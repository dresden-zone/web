{ mkPnpmPackage }:

mkPnpmPackage {
    src = ./.;

    installInPlace = true;

    script = "build:ci";

    installPhase = ''
      mkdir -p $out
      cp -r ./dist/browser/* $out/
    '';
}
