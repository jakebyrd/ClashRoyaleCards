it('should check ng-submit', function(){
    expect(element(by.binding('list')).getText()).toBe('list=[]');
    element(by.css('#submit')).click();
    expect(element(by.binding('list')).getText()).toContain('');
    expect(element(by.model('text')).getAttribute('value')).toBe('');
  });
it('should ignore empty strings', function() {
    expect(element(by.binding('list')).getText()).toBe('list=[]');
    element(by.css('#submit')).click();
    element(by.css('#submit')).click();
    expect(element(by.binding('list')).getText()).toContain('');
   });