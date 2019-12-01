class Main {
    public static void main(String[] args) {
        double a = 3.14;
        System.out.println(a% 3.1);
        System.out.println(a% 3.14);
        System.out.println(a% 10);
        
        int b = 4;
        System.out.println(b% 3.1);
        System.out.println(b% 3.14);
        System.out.println(b% 10);
    }

    /*
    result
    0.040000000000000036
    0.0
    3.14
    0.8999999999999999
    0.8599999999999999
    4
    */
}