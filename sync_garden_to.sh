#!/usr/bin/env bash

# ==============================================================================
# SCRIPT ĐỒNG BỘ TÍNH NĂNG CHẬU CỎ 4 LÁ & TÍCH LŨY NƯỚC TƯỚI VSTEP
# Author: English with Miss Nguyet
# ==============================================================================

set -e

SRC_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TARGET_DIR="$1"

if [ -z "$TARGET_DIR" ]; then
    echo "❌ LỖI: Vui lòng chỉ định đường dẫn thư mục website đích!"
    echo "👉 Cú pháp: ./sync_garden_to.sh \"/Users/nguyetpham/Desktop/WEBSITE/ten-website\""
    exit 1
fi

if [ ! -d "$TARGET_DIR" ]; then
    echo "❌ LỖI: Thư mục đích không tồn tại: $TARGET_DIR"
    exit 1
fi

echo "======================================================================"
echo "🍀 BẮT ĐẦU CẬP NHẬT CHẬU CỎ MAY MẮN VSTEP SANG: $TARGET_DIR"
echo "======================================================================"

# 1. Copy thư mục ảnh Cỏ 4 Lá (assets/garden/)
echo "📦 1. Đang sao chép hình ảnh Cỏ 4 Lá 4 giai đoạn sinh trưởng..."
mkdir -p "$TARGET_DIR/assets/garden"
cp -v "$SRC_DIR/assets/garden/"*.png "$TARGET_DIR/assets/garden/"

# 2. Copy các file cốt lõi (CSS, Definitions, Engine)
echo "📄 2. Đang sao chép các file cốt lõi (CSS, Definitions, Engine)..."
cp -v "$SRC_DIR/flower_garden.css" "$TARGET_DIR/flower_garden.css"
cp -v "$SRC_DIR/flower_definitions.js" "$TARGET_DIR/flower_definitions.js"
cp -v "$SRC_DIR/flower_garden.js" "$TARGET_DIR/flower_garden.js"

echo "======================================================================"
echo "✅ SAO CHÉP TÀI NGUYÊN THÀNH CÔNG!"
echo "======================================================================"
echo ""
echo "👉 BÂY GIỜ CHỈ CẦN 2 BƯỚC NHÚNG VÀO FILE index.html CỦA WEBSITE ĐÍCH:"
echo ""
echo "1️⃣ Trong thẻ <head> thêm dòng:"
echo '    <link rel="stylesheet" href="flower_garden.css">'
echo ""
echo "2️⃣ Trước thẻ đóng </body> thêm 2 file JS:"
echo '    <script src="flower_definitions.js"></script>'
echo '    <script src="flower_garden.js"></script>'
echo ""
echo "3️⃣ TÍCH HỢP TỰ ĐỘNG CỘNG NƯỚC KHI HỌC VIÊN HOÀN THÀNH BÀI:"
echo "    Khi học viên nộp bài / trả lời đúng, chỉ cần gọi trong JS:"
echo "    if (window.FlowerGarden) {"
echo "        FlowerGarden.addWaterDrops(10, 'Hoàn thành bài tập VSTEP');"
echo "    }"
echo "======================================================================"
