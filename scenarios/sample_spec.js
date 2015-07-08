describe('サンプルテスト', function() {
  it('GoogleのタイトルはGoogle', function() {
    browser.get('http://www.google.com/');

    expect(browser.getTitle()).toEqual('Google');
  });
});
