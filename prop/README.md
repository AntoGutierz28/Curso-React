# Prop

- Argumentos a una funcin para hacer codigos reusables
- Se puede idicar atributos en la etiqueta del componente, y mostrarse en el renderizado

```
ReactDOM.render(<Badge name="AnkerGH" surname="2898" />, container);
```

- Codigo en el componente

```
<h1>
  {this.props.name}
  <br /> {this.props.surname}
</h1>
```
