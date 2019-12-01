class Main {
    public static void main(String[] args) {
        double a = 1.3;
        switch(a) {
            case 1.3:
                System.out.print("Yes");
                break;
            default:
                System.out.println("default");
        }
        /*
        result
        Main.java:4: error: incompatible types: possible lossy conversion from double to int
        switch(a) {
              ^
        1 error
        */
    }
}