int lights[] = {6,7,8};  // green=0, yellow=1, red=2
#define N 3
unsigned long times[] = {3000,3000,5000};

void setup() {
  for(int i=0; i<N; i++) pinMode(lights[i], OUTPUT);
}

void loop() {
  for(int i=0; i<N; i++) {
    digitalWrite(lights[i], HIGH);
    delay(times[i]);
    digitalWrite(lights[i], LOW);
  }
}
