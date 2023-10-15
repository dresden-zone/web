{ pkgs, lib, config, mkYarnPackage, yarn }:
mkYarnPackage {
    name = "waiter";
    src = ./.;

    buildInputs = [ yarn ];

    buildPhase = ''
      ls -alh
      ls -alh ./deps
      FILE=$(readlink ./deps/waiter/node_modules)
      rm ./deps/waiter/node_modules
      mkdir ./deps/waiter/node_modules

      cp -r $FILE/ ./deps/waiter/
      chmod -R 777 ./deps/waiter
      cp -r ./node_modules/* ./deps/waiter/node_modules/

      yarn run build
    '';

    installPhase = ''
      mkdir -p $out/bin/en
      mkdir -p $out/bin/de
      cp -r ./deps/waiter/dist/en-US/* $out/bin/en/
      cp -r ./deps/waiter/dist/de-DE/* $out/bin/de/
    '';

    doDist = false;
}
