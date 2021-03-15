/*  Example Format

    # Summary

    * [Introduction](README.md)

    ## **Testing**

    * [blah blah](README.md)
*/

const fs = require("fs");
const path = require("path");
const { GlobSync } = require("glob");
const grayMatterFromFile = require("gray-matter-from-file").default;
const readmeFiles = new GlobSync(path.join("./docs", "/**/README.md")).found;
const categories = [
    // Articles
    {
        pageIdentifier: "/articles/bootcamp",
        filePath: "docs/articles/bootcamp/README.md",
        name: "Articles",
        pages: [],
    },
    // Main API
    {
        pageIdentifier: "/altClient/",
        filePath: "docs/altClient/README.md",
        name: "alt-client",
        pages: [],
    },
    {
        pageIdentifier: "/alt/",
        filePath: "docs/alt/README.md",
        name: "alt-server",
        pages: [],
    },
    {
        pageIdentifier: "/player/",
        filePath: "docs/player/README.md",
        name: "Player (Server)",
        pages: [],
    },
    {
        pageIdentifier: "/playerClient/",
        filePath: "docs/playerClient/README.md",
        name: "Player (Client)",
        pages: [],
    },
    {
        pageIdentifier: "/vehicle/",
        filePath: "docs/vehicle/README.md",
        name: "Vehicle",
        pages: [],
    },
    {
        pageIdentifier: "/vehicleClient/",
        filePath: "docs/vehicleClient/README.md",
        name: "Vehicle (Client)",
        pages: [],
    },
    {
        pageIdentifier: "/native/",
        filePath: "docs/native/README.md",
        name: "Natives",
        pages: [],
    },
];

if (fs.existsSync("SUMMARY.md")) {
    fs.unlinkSync("SUMMARY.md");
}

function appendLineToFile(content) {
    if (content.includes("#")) {
        fs.appendFileSync("SUMMARY.md", `\r\n${content}\r\n`);
        return;
    }

    fs.appendFileSync("SUMMARY.md", `\r\n${content}`);
}

async function loadFiles() {
    const categories = [];

    for (let i = 0; i < readmeFiles.length; i++) {
        const filePath = readmeFiles[i];
        if (filePath.includes("docs/README.md")) {
            continue;
        }

        if (filePath.includes("docs/articles/README.md")) {
            continue;
        }

        const globPattern = filePath.replace("README.md", "**/*.md");
        const fileData = await grayMatterFromFile(filePath);
        const pages = new GlobSync(globPattern).found;
        const pagesRefined = [];

        for (let index in pages) {
            const pagePath = pages[index];
            if (pagePath.includes("README.md")) {
                continue;
            }

            const pageData = await grayMatterFromFile(pagePath);
            let title = pageData.title;

            if (fileData.prefix.includes("Server")) {
                title = "[S] " + title;
            }

            if (fileData.prefix.includes("Client")) {
                title = "[C] " + title;
            }

            pagesRefined.push({
                title,
                src: pagePath,
            });
        }

        const categoryName = fileData.prefix.replace("[", "").replace("]", "");

        console.log(categoryName);
        console.log(`Pages: ${pagesRefined.length}`);
        categories.push({ title: categoryName, src: filePath, pages: pagesRefined });
    }

    appendLineToFile("# Navigation");

    categories.forEach((category) => {
        appendLineToFile(`* [${category.title}](${category.src})`);

        if (category.pages.length <= 0) {
            return;
        }

        category.pages.forEach((page, index) => {
            if (index === category.pages.length - 1) {
                appendLineToFile(`    * [${page.title}](${page.src})\r\n`);
                return;
            }

            appendLineToFile(`    * [${page.title}](${page.src})`);
        });
    });
}

loadFiles();
