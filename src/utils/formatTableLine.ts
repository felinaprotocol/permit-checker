import chalk from 'chalk';

export function formatTableLine(item: { Token: string; Address: string; HasPermit: string }): { Token: string; Address: string; HasPermit: string } {
    return {
        Token: chalk.blue(item.Token),
        Address: chalk.magenta(item.Address),
        HasPermit: item.HasPermit === 'Yes' ? chalk.green(item.HasPermit) : chalk.red(item.HasPermit)
    };
}
