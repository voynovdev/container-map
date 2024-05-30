import { ErrorRepository } from "../classError";

test('Check making class', () => {
	const errorRepo = new ErrorRepository();
	const result = {
		errorMap: new Map()
	}
	expect(errorRepo).toEqual(result)
});

test('Check working method addError', () => {
	const errorRepo = new ErrorRepository();
	errorRepo.addError(1, 'Ошибка №1');
	const result = new Map();
	result.set(1, 'Ошибка №1')
	expect(errorRepo.errorMap).toEqual(result)
});

test('Check working method translate', () => {
	const errorRepo = new ErrorRepository();
	errorRepo.addError(1, 'Ошибка №1');
	expect(errorRepo.translate(1)).toBe('Ошибка №1')
})

test('Check working method translate with empty value', () => {
	const errorRepo = new ErrorRepository();
	expect(errorRepo.translate()).toBe('Unknown error')
})