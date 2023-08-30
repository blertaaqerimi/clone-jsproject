import Client from "shopify-buy";

const client = Client.buildClient({
	domain: "{Shopify domain}.myshopify.com",
	apiVersion: "2023-04",
	storefrontAccessToken: "{Your storefront access token}",
});

export default client;