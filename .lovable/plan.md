

## Plan: Restructurare afișare preț implementare + mentenanță opțională

### Ce se schimbă

Pentru **Elite** și **Accelerator**, prețul principal (3500€ / 1900€) trebuie etichetat clar ca **preț de implementare**, iar linia de 300€/lună trebuie reformulată ca **opțională, doar după atingerea TOP 3**.

### Cum va arăta

Pentru ambele pachete, sub preț:

```text
3500€
implementare

300€/lună mentenanță & protecție poziție
(opțional · doar după atingerea obiectivului TOP 3)
```

### Modificări tehnice

**Fișier**: `src/pages/Index.tsx`

1. **Elite (linia 332-333)**: Sub `3500€` adaug label "implementare". Linia de 300€ devine mai mică/subtilă cu nota "(opțional · doar după atingerea obiectivului TOP 3)" pe un rând separat.

2. **Accelerator (linia 358-360)**: Același tratament — label "implementare" sub `1900€`, iar 300€/lună cu nota de opționalitate.

Nota va fi stilizată cu text mai mic (`text-xs`) și opacity redusă pentru a nu domina vizual, dar să fie clar vizibilă.

