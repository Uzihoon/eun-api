npx aws-api-gateway-cli-test \
--username='username' \
--password='password' \
--user-pool-id='pool-id' \
--app-client-id='client-id' \
--cognito-region='region' \
--identity-pool-id='identity-pool-id' \
--invoke-url='invoke-url' \
--api-gateway-region='gateway-region' \
--path-template='path' \
--method='POST' \
--body='{"content":"hello world"}'
