# aaa-contact service

Deployed on Hetzner as systemd `aaa-contact.service`, source at `/etc/edd/aaa-contact.ts`
(Deno, port 3158, Caddy routes `actingagency.nl/contact` -> `localhost:3158`). This copy is
for version history / reference - deploy is copy-to-Hetzner + `systemctl restart aaa-contact`,
not a git pull.

Secrets (`MAILGUN_API_KEY`, `AAA_TO_EMAIL`) live in the systemd unit's `Environment=` lines on
Hetzner, never in this repo.
