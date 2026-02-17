int leds[] = {6,7,8};
#define N 3

void setup() {
  for(int i=0; i<N; i++) pinMode(leds[i], OUTPUT);
}

void loop() {
  for(int i=0; i<N; i++) {
    digitalWrite(leds[i], HIGH);
    delay(500);
    digitalWrite(leds[i], LOW);
    delay(500);
  }
}
