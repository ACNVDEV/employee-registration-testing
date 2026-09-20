# Employee Registration Testing

Prototipo académico en TypeScript para la asignatura **Pruebas de Software I**. El proyecto implementa un registro de empleados y servirá como base para aplicar técnicas de caja negra, caja blanca, cobertura grafos y estimación de tiempos.

## Reglas del prototipo

- Código: exactamente 3 dígitos, desde `001` hasta `999`; `000` es inválido.
- Nombre: entre 1 y 30 caracteres después de eliminar espacios iniciales y finales.
- Tipo de empleado: `0` = término fijo; `1` = planta.
- Tiempo en la institución: entero entre 1 y 600 meses.
- El sistema informa el primer error según este orden: código, nombre, tipo y meses.

## Stack

- Node.js 24 LTS
- TypeScript
- pnpm
- Vitest
- V8 coverage

## Instalación

```bash
corepack enable
pnp install
```

## Scripts

```bash
pnpm typecheck
pnpm build
pnpm start
pnpm test
pnpm test:coverage
```

## Estructura

```text
src/
├── application/
├── domain/
├── services/
└── validators/
```

La pruebas automatizadas se incorporarán en la fase de pruebas de caja blanca.
