module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const ver = "";
    const responseMessage = name
        ? "ver01 Hello, " + name + ". AMC-Pipe3.This HTTP triggered function executed successfully."
        : "ver01 AMC-Pipe3.This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}
