const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/;

regex.test("Abcdef12"); 
regex.test("abcdef12"); 