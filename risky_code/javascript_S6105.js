// S6105: Open redirect
const queryParams = new URLSearchParams(document.location.search);
const redirectUrl = queryParams.get("url");
document.location = redirectUrl; // Noncompliant
