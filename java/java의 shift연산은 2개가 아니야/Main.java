class Main {
    public static void main(String[] args) {
        int a = 5;
        System.out.println(a << 1); // 10
        System.out.println(a >> 1); // 2
        System.out.println(a >>> 1); // 2
        
        System.out.println(a << 32); // 5
        System.out.println(a >> 32); // 5
        System.out.println(a >>> 32); // 5
        

        a = -10;
        System.out.println(a << 1); // -20
        System.out.println(a >> 1); // -5
        System.out.println(a >>> 1); // 2147483643

        System.out.println(a << 32); // -10
        System.out.println(a >> 32); // -10
        System.out.println(a >>> 32); // -10
    }
}