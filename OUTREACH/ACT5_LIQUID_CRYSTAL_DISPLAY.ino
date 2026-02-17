#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27, 16, 2);  // I2C address, number of columns, number of rows

void setup() {
  lcd.init();        // Initialize the LCD hardware
  lcd.backlight();   // Turn on the backlight so the screen is visible
  
  lcd.setCursor(0, 0);    // Move cursor to column 0, row 0 (top-left)
  lcd.print("TEAM NAME"); // Print "TEAM NAME" on the second row
}

void loop() {
  // Empty — text only needs to be written once in setup()
  // The LCD holds its content without needing to be refreshed
}