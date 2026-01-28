const React = require("react")

exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
    setHtmlAttributes({ lang: `en` })
    setHeadComponents([
        React.createElement("meta", {
            key: "format-detection",
            name: "format-detection",
            content: "telephone=no, date=no, email=no, address=no"
        })
    ])
}
