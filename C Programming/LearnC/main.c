#include <stdio.h>
#include <stdlib.h>

void respaceArray(int, int[]);

void main() {
    char personName[] = "John";
    printf("Person name - %s", personName);
    int arr[] = {1,0,0,2,0,0,0,3,0,0,0,0,4,5,0,6,7,8};
    respaceArray(18, arr);
    for(int i = 0; i < 18; i++) {
        if(arr[i] == 0) {
            break;
        }
        printf("%d\n", arr[i]);
    }
}

void respaceArray(int arrLen, int arr[]) {
    int i = 0, j = NULL;

    while(i < arrLen) {
        if(j != NULL) {
            if(arr[i] != 0) {
                arr[j] = arr[i];
                arr[i] = 0;
                j++;
            }
        }
        else if(arr[i] == 0) {
            j = i;
        }

        i++;
    }
}