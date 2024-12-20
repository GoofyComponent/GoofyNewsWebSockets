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

3. Add the following line to your environment file. You can get an API key from [NewsAPI](https://newsapi.org/)
```
NEWS_API_KEY=your_api_key
```