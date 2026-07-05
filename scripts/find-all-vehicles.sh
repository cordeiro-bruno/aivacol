#!/bin/bash
access_token="$(curl -X POST \
    -H "Content-Type: application/json" \
    -d '{ "email" : "aivacol@aivacol.aivacol", "password" : "aivacol" }' \
    http://localhost:3000/auth/login \
    | jq -r '.access_token') "
curl -X GET \
    -H "Authorization: Bearer $access_token" \
    http://localhost:3000/vehicles