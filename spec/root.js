describe('API', function () {
  describe('Root', function () {
    var mms;

    beforeEach(function() {
      mms = new MMS({
        username: MMS_USERNAME,
        apiKey: MMS_API_KEY,
        host: MMS_HOST
      });
    });

    it('can retrieve valid Root resource', function (done) {
      var targetSchema = tv4.getSchema(
        'http://leafygreen.github.io/mms-api-schema/schemas/v1.0#/definitions/root/links/0/targetSchema'
      );

      mms.root().info(function(err, resp) {
        assert.isNull(err, 'err should not be defined');
        assert.isNotNull(resp, 'resp should be defined');
        assert.isTrue(tv4.validate(resp, targetSchema), 'resp should validate against proper link schema');
        done();
      });
    });

  });
});
