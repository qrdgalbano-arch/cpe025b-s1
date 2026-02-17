#include <LiquidCrystal_I2C.h>

LiquidCrystal_I2C lcd(0x27, 16, 2);  // Address, cols, rows

void setup() {
  lcd.init();
  lcd.backlight();
  lcd.setCursor(0, 0);
  lcd.print("TIP QC");
  lcd.setCursor(0, 1);
  lcd.print("TEAM NAME");
}

void loop() {
  // Empty for static display
}
