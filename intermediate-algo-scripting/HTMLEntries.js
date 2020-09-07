/**
 * Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
 *
 * Test Cases:
 *
 convertHTML("Dolce & Gabbana") should return "Dolce &amp; Gabbana".
 convertHTML("Hamburgers < Pizza < Tacos") should return "Hamburgers &lt; Pizza &lt; Tacos".
 convertHTML("Sixty > twelve") should return "Sixty &gt; twelve".
 convertHTML('Stuff in "quotation marks"') should return "Stuff in &quot;quotation marks&quot;".
 convertHTML("Schindler's List") should return "Schindler&apos;s List".
 convertHTML("<>") should return "&lt;&gt;".
 convertHTML("abc") should return "abc".
 * @param str
 * @returns {string|XML}
 */
function convertHTML(str) {
    return str
        .replace(/&/g,"&amp;")
        .replace(/</g,"&lt;")
        .replace(/>/g,"&gt;")
        .replace(/"/g,"&quot;")
        .replace(/'/g,"&apos;");
}

convertHTML("Dolce & Gabbana");


// Method-2
function convertHTML2(str) {
    const htmlEntities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    };
    // Using a regex, replace characters with it's corresponding html entity
    return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
}

convertHTML2("Dolce & Gabbana");