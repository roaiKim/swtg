
const http = {

    // dev: "http://119.29.53.45:3200",
    test: "",
    uat: "",
    pro: "",
};

export function completePath(path, type = "dev") {

    /* if (process.env.NODE_ENV !== "production") {
        return path;
    } */
    if (path && (path.startsWith("http://") || path.startsWith("https://"))) {
        return path;
    }
    return (http[type] || "") + path;
}

export const baseApi = {
    // 开发版
    develop: "http://119.29.53.45/api/",
    // 体验版
    trial: "http://119.29.53.45/api/",
    // 正式版
    release: "",
};
