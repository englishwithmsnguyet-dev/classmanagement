// ==========================================
// MÃ NGUỒN ĐỒNG BỘ ĐÁM MÂY (GOOGLE APPS SCRIPT)
// ==========================================

const SCRIPT_PROP = PropertiesService.getScriptProperties();
const DB_SHEET_NAME = 'Database'; 

function setup() {
  const doc = SpreadsheetApp.getActiveSpreadsheet();
  const prop = PropertiesService.getScriptProperties();
  prop.setProperty('key', doc.getId());
  
  let sheet = doc.getSheetByName(DB_SHEET_NAME);
  if (!sheet) {
    sheet = doc.insertSheet(DB_SHEET_NAME);
  }
}

// Xử lý khi có dữ liệu GỬI LÊN (POST)
function doPost(e) {
  try {
    const doc = SpreadsheetApp.openById(SCRIPT_PROP.getProperty('key'));
    let sheet = doc.getSheetByName(DB_SHEET_NAME);
    if (!sheet) {
      sheet = doc.insertSheet(DB_SHEET_NAME);
    }
    
    // Đọc JSON gửi lên
    const postData = e.postData.contents;
    
    // Lưu cục JSON này vào ô A1 của Sheet Database
    sheet.getRange('A1').setValue(postData);
    
    return ContentService
      .createTextOutput(JSON.stringify({ "status": "success", "message": "Saved successfully" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ "status": "error", "message": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Xử lý khi TẢI DỮ LIỆU VỀ (GET)
function doGet(e) {
  try {
    const doc = SpreadsheetApp.openById(SCRIPT_PROP.getProperty('key'));
    const sheet = doc.getSheetByName(DB_SHEET_NAME);
    
    if (sheet) {
      const data = sheet.getRange('A1').getValue();
      if (data) {
        return ContentService
          .createTextOutput(data)
          .setMimeType(ContentService.MimeType.JSON);
      }
    }
    
    return ContentService
      .createTextOutput(JSON.stringify({ "status": "empty" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ "status": "error", "message": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
