# Changelog

All notable changes to this project will be documented in this file.

## [0.4.1 (Latest)] - 2020-05-01

### Fixed

- Inconsistent calls to set and edit modal options. All `$x5.setOptions` and `$x5.editOptions` references have been replaced with `$x5.setModal` and `$x5.editModal`.
- Order of options priority: `$x5.editModal()` | `$emit('editModal',{})` > `$x5.openModal()` > `$emit('setModal',{})`.

---

## [0.4.0] - 2020-05-01

### Added

- [MIGRATION doc]('./MIGRATION.md) for detailed changes and update instructions.
- Async component loading support.
- 5 second timeout for async components to load. After this a failure to load error will display in the modal.
- `setModal` event listener for defining modal options from within your component.
  - e.g. `$emit('setModal', { title: 'Modal Title' })`
- `editModal` event listener for editing modal options from within your component.
  - e.g. `$emit('editModal', { title: 'Changed Title' })`
- `setLoading` event listener for manually activating modal loading overlay from within your component.
  - e.g. `$emit('setLoading', true)`
- `onOK` & `onCancel` modal options to bind functions that run after respective events.

### Changed

- Components registered as modals no longer require a name from within the component (previously defined as a property of the `<x5-modal>` wrapper).
- **IMPORTANT** Swapped order of data/options properties in `$x5.editModal()` and `$x5.openModal()` to `name, data, options`.

### Removed

- **IMPORTANT** `<x5-modal>` component - no wrapper needed to register a component.
- **IMPORTANT** `@ok` & `@cancel` events - use `onOK` & `onCancel` options instead.
- **IMPORTANT** `loading` modal option - use `$emit('setLoading', true)` instead.
- **IMPORTANT** `z-index` modal option - order will be purely the order modals were opened.
