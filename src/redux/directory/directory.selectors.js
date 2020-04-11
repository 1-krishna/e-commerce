import { createSelector } from 'reselect';

const directory = state => state.directory;

export const selectSections = createSelector(
    [directory],
    directory => directory.sections
)