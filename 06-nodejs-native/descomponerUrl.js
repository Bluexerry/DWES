function descomposeUrl(url) {
    const objUrl = new URL(url);
    const folderTree = objUrl.pathname.split("/").slice(1);
    const targetFile = folderTree.pop();
    console.log(objUrl);
    return {
        protocol: objUrl.protocol.slice(0, -1),
        ipAdress: null,
        subDomain: "www",
        domainName: "google.com",
        folderTree,
        targetFile,
        argumentsFile: objUrl.search
    }
}

decomposeUrl("https://www.google.com/search/test.js?ok=1")