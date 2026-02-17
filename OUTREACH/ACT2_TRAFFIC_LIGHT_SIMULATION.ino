// Code 2: Traffic Light Simulation
int red = 6;
int yellow = 7;
int green = 8;

void setup() {
  // put your setup code here, to run once:
pinMode(red, OUTPUT);
pinMode(yellow, OUTPUT);
pinMode(green, OUTPUT);
}

void loop() {
  // put your main code here, to run repeatedly:
digitalWrite(green, HIGH);
delay(3000);
digitalWrite(green, LOW);
digitalWrite(yellow, HIGH);
delay(3000);
digitalWrite(yellow, LOW);
digitalWrite(red, HIGH);
delay(5000);
digitalWrite(red, LOW);


}
