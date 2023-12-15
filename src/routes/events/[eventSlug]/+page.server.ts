import { access_token } from '$lib/server/accessToken'
import { get } from 'svelte/store';
export async function load({ params, fetch }) {
    const event = await fetch("https://api.helloasso.com/v5/organizations/normatest/forms/event/" + params.eventSlug + "/public", {
        method: "GET",
        headers: {
            authorization: 'Bearer ' + get(access_token)
        }
    }).then(resp => resp.json())
    return event
}