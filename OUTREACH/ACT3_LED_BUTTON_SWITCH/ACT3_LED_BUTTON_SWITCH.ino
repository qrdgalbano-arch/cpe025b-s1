int led[] = {2,3,4};
int button[] = {8,9,10};

void setup() {
for (int i = 0; i<3; ++i) {
  pinMode(led[i], OUTPUT);
  pinMode(button[i], INPUT_PULLUP);
}
}

void loop() {
digitalWrite(led[0], digitalRead(button[0]) == LOW ? HIGH : LOW);
digitalWrite(led[1], digitalRead(button[1]) == LOW ? HIGH : LOW);
digitalWrite(led[2], digitalRead(button[2]) == LOW ? HIGH : LOW);
}