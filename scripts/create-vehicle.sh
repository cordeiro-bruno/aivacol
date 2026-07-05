#!/bin/bash
access_token="$(curl -X POST \
    -H "Content-Type: application/json" \
    -d '{ "email" : "aivacol@aivacol.aivacol", "password" : "aivacol" }' \
    http://localhost:3000/auth/login \
    | jq -r '.access_token') "
curl -X POST \
    -H "Authorization: Bearer $access_token" \
    -H "Content-Type: application/json" \
    -d '{ "license_plate" : "ABC1D23", "chassis" : "12345678901234567", "renavam" : "12345678901", "year" : "2026" }' \
    http://localhost:3000/vehicles