# --- Giai đoạn 1: Build source code thành file tĩnh ---
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
# --- Giai đoạn 2: Dùng Nginx để chạy web ---
FROM nginx:alpine
# 1. Copy toàn bộ file tĩnh (HTML/JS) vào thư mục của Nginx
COPY --from=builder /app/dist /usr/share/nginx/html
# 2. Copy file script cấu hình từ máy của bạn vào trong Docker
COPY entrypoint.sh /entrypoint.sh
# 3. Cấp quyền chạy cho file script này
RUN chmod +x /entrypoint.sh
# 4. Bảo Docker: "Mỗi lần bật container lên, hãy chạy file script này đầu tiên"
ENTRYPOINT ["/entrypoint.sh"]