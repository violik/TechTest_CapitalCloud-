# Use the official PHP image
FROM php:8.2-cli

# Install system dependencies for PHP extensions
RUN apt-get update && apt-get install -y \
    libxml2-dev \
    libsqlite3-dev \
    zlib1g-dev \
    git \
    && docker-php-ext-install pdo pdo_mysql xml

# Set the working directory to /var/www/html
WORKDIR /var/www/html

# Copy the composer.json and composer.lock to install dependencies before copying the rest of the code
COPY composer.json composer.lock ./

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install dependencies using Composer
RUN composer install --no-dev --optimize-autoloader

# Copy the rest of the application code (excluding vendor folder and any unnecessary files)
COPY . .

# Set up the working directory and expose port 8000
CMD ["php", "-S", "0.0.0.0:8000", "-t", "public"]

# Expose port 8000 for the PHP built-in server
EXPOSE 8000
