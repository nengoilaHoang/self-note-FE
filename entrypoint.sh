#!/bin/sh
# 1. Dòng này chạy trên Server: Lấy biến $VITE_API_URL từ file .env TRÊN SERVER để đè vào file tĩnh
sed -i "s|__VITE_API_URL_PLACEHOLDER__|$VITE_API_URL|g" /usr/share/nginx/html/assets/*.js
# 2. Dòng này chạy trên Server: Kích Nginx lên để mở cổng đón request
exec nginx -g "daemon off;"