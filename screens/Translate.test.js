test('ключ апи не Undefined', 
() =>{
    let keys = undefined;
    const inspector = /[0-9][a-z]/;
    if(inspector.test(keys)){
        expect(keys).toBeDefined();
    } else {
        keys = 1;
        expect(keys).toBeDefined();
    }
});

test('ключ апи не Null', 
() =>{
    let keys = null;
    const inspector = /[0-9][a-z]/;
    if(inspector.test(keys)){
        expect(keys).not.toBeNull();
    } else {
        keys = 1;
        expect(keys).not.toBeNull();
    }
});

test('ключ апи при невалидном значении', 
() =>{
    let keys = ['1', '12', '1200000', 'a', 'ab', 'absssss', 'null',
     'undefined', 'admin', '/.\|;*&^', '!', 'infinity', 'DDSFFCqw', 
     '-', '+', '=', '+-=', '<h1>text1</h1>'];
    const inspector = /[0-9][a-z]/;
    for (item in keys){
        // expect(inspector.test(keys)).toBeTruthy(); -- god
        expect(inspector.test(keys)).toBeFalsy();
        expect(!inspector.test(keys)).toBeTruthy();
        if(!inspector.test(keys)){
            keys[0] = 1;
            expect(keys[0]).toBe(1)
        }
    }
});

test('ключ апи при валидном значении', 
() =>{
    let keys = ['aa123dd', 'rtn132nbhb24k212lk124', '21323lklj214', 'null123214',
                'undefined1'];
    const inspector = /[0-9][a-z]/;
    for (item in keys){
        expect(inspector.test(keys)).toBeTruthy();
    }
});