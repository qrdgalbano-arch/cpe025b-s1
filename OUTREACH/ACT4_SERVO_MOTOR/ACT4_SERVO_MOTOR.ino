// Code 3: Servo Motor
#include <Servo.h>
Servo myservo;

void setup() {
  // put your setup code here, to run once:
myservo.attach(5);
}

void loop() {
  // put your main code here, to run repeatedly:
for (int i = 0; i <= 180; i+=45) {
  myservo.write(i);
  delay(1000);
}

for (int i = 180; i <= 0; i-=45) {
  myservo.write(i);
  delay(1000);
}

}
