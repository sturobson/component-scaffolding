module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a new component with files and folders',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name?',
      },
      {
        type: 'list',
        name: 'type',
        message: 'Is this component an atom, molecule, or organism?',
        choices: ['atom', 'molecule', 'organism'],
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'components/{{type}}s/{{typeAbbreviation type}}-{{kebabCase name}}/{{typeAbbreviation type}}-{{kebabCase name}}.njk',
        templateFile: 'plop-templates/component.njk.hbs',
      },
      {
        type: 'add',
        path: 'components/{{type}}s/{{typeAbbreviation type}}-{{kebabCase name}}/index.scss',
        templateFile: 'plop-templates/index.scss.hbs',
      },
      {
        type: 'add',
        path: 'components/{{type}}s/{{typeAbbreviation type}}-{{kebabCase name}}/index.js',
      },
      {
        type: 'add',
        path: 'components/{{type}}s/{{typeAbbreviation type}}-{{kebabCase name}}/README.md',
        templateFile: 'plop-templates/README.md.hbs',
      },
    ],
  });

  // Custom helper to define type abbreviation
  plop.setHelper('typeAbbreviation', (type) => {
    switch (type) {
      case 'atom': return 'a';
      case 'molecule': return 'm';
      case 'organism': return 'o';
      default: return '';
    }
  });

  plop.setHelper('creationDate', () => new Date().toLocaleDateString());

};