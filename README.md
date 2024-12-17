# GoofyNewsWebSockets

## Installation

1. Launch Docker container
```bash
docker-compose up -d
```

2. Populate the database
```bash
docker-compose exec laravel php artisan migrate:fresh --seed
```
