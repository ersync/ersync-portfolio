import eslintConfigPrettier from 'eslint-config-prettier'
import pluginVue from 'eslint-plugin-vue'
import accessibility from 'eslint-plugin-vuejs-accessibility'
import { withVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'

export default withVueTs(
  { rootDir: import.meta.dirname },
  {
    name: 'portfolio/ignores',
    ignores: ['dist/**', 'coverage/**', 'public/**']
  },
  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommendedTypeChecked,
  ...accessibility.configs['flat/recommended'],
  {
    name: 'portfolio/rules',
    rules: {
      'vue/multi-word-component-names': 'off',
      'vuejs-accessibility/label-has-for': ['error', { required: 'id' }]
    }
  },
  eslintConfigPrettier
)
