import { test } from '@playwright/experimental-ct-react';

test('enum', async ({ mount }) => {
  await mount(<div>Enum</div>);
});
