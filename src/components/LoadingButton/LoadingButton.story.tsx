/**
 * Copyright 2019, SumUp Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { useState } from 'react';
import { select } from '@storybook/addon-knobs';

import docs from '../Button/Button.docs.mdx';
import { LoadingButton, LoadingButtonProps } from './LoadingButton';

export default {
  title: 'Components/Button/LoadingButton',
  component: LoadingButton,
  parameters: {
    docs: { page: docs },
    jest: ['LoadingButton']
  }
};

const StatefulLoadingButton = (props: Partial<LoadingButtonProps>) => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <LoadingButton
      isLoading={loading}
      loadingLabel="Loading"
      onClick={handleClick}
      variant={select(
        'Variant',
        ['primary', 'secondary', 'tertiary'],
        'primary'
      )}
      size={select('Size', ['kilo', 'mega', 'giga'], 'mega')}
      {...props}
    >
      Things take time
    </LoadingButton>
  );
};

export const Base = () => <StatefulLoadingButton />;