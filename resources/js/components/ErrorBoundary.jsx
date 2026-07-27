import { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props)

        this.state = { error: null }
    }

    static getDerivedStateFromError(error) {
        return { error }
    }

    render() {
        if (!this.state.error) return this.props.children

        return (
            <main className="grid min-h-dvh place-items-center bg-zinc-50 px-4 font-sans text-zinc-950">
                <section className="grid w-full max-w-lg gap-4 rounded-xl bg-white p-6 ring-1 ring-zinc-950/10">
                    <div className="grid gap-1">
                        <h1 className="text-lg font-semibold">
                            The dashboard could not be rendered
                        </h1>
                        <p className="text-sm/6 text-zinc-600">
                            Your recorded traces are safe. Reload the dashboard
                            to try again.
                        </p>
                    </div>
                    <button
                        type="button"
                        onClick={() => window.location.reload()}
                        className="w-fit rounded-lg bg-zinc-950 px-3 py-2 text-sm/5 font-medium text-white observatory-focus hover:bg-zinc-800"
                    >
                        Reload dashboard
                    </button>
                </section>
            </main>
        )
    }
}
