class Main {
    public static void main(String[] args) {
        long a = 1L;
        switch(a) {
            case 1L:
                System.out.print("Yes");
                break;
            default:
                System.out.println("default");
        }
        /*
        result
        Main.java:4: error: incompatible types: possible lossy conversion from long to int
        switch(a) {
              ^
        1 error
        */
    }
}